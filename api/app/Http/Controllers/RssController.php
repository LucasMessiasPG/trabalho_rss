<?php

namespace App\Http\Controllers;

use App\Noticia;
use App\Portal;
use Illuminate\Http\Request;

class RssController extends Controller
{
	public function import(Request $request)
	{
		try{
			/**
			 * @var \Symfony\Component\HttpFoundation\File\UploadedFile|array|null File$arquivo
			 */
			$arquivo = $request->file('file');

			if(!preg_match('/xml/', $arquivo->getMimeType()))
				return $this->_return(false, "arquivo inválido");

			$feed = simplexml_load_file($arquivo);

			/**
			 * @var Portal $portal
			 */
			$portal = Portal::firstOrCreate([
				'nome_portal' => $feed->channel->title,
				'site' => $feed->channel->link,
				'email' => $feed->channel->author
				]);


			$items = $feed->channel->item;

			/**
			 * todos os itens do rss
			 * @var \SimpleXMLElement $item
			 */
			foreach ($items as $item) {
				Noticia::create([
					'titulo' => trim($item->title),
					'id_portal' => $portal->id_portal,
					'conteudo' => substr(trim($item->description), 0, 255),
					'gravata' => substr(trim($item->description), 0, 200),
					'link' => $item->link,
					'data' => date('Y-m-d', $this->rsstotime($item->pubDate))
				]);
			}

			return $this->_return(true, 'Importado com sucesso.');
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao exportar rss',$e);
		}
	}
	
	public function export(Request $request)
	{
		try{
			
			// export rss
		            
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao exportar rss',$e);
		}
	}
	
	public function filter(Request $request)
	{
		try{
		            
		    // filter rss
			$campos = [
				'noticia',
				'titulo',
				'email',
				'link',
				'data'
			];

			$noticias = Noticia::orderBy('data');
			$ilike = ['noticia','titulo','email','link'];
			foreach ($request->only($campos) as $field => $value) {
				if(!empty($value)){
					return in_array($field,$ilike);
					if(in_array($field,$ilike)){
						$noticias->where($field,'ilike','%'.$value.'%');
					}elseif($field == 'data'){
						$noticias->where($field,'=',$value);
					}
				}
				
			}

			return $this->_return(true,'Filtro efetuado',$noticias->get()->toArray());
		}catch (\Exception $e){
		    return $this->_return(false,'Erro ao filtrar rss',$e);
		}
	}

	private function rsstotime($rss_time) {
		$day = substr($rss_time, 5, 2);
		$month = substr($rss_time, 8, 3);
		$month = date('m', strtotime("$month 1 2011"));
		$year = substr($rss_time, 12, 4);
		$hour = substr($rss_time, 17, 2);
		$min = substr($rss_time, 20, 2);
		$second = substr($rss_time, 23, 2);
		$timezone = substr($rss_time, 26);

		$timestamp = mktime($hour, $min, $second, $month, $day, $year);

		date_default_timezone_set('UTC');

		if(is_numeric($timezone)) {
			$hours_mod = $mins_mod = 0;
			$modifier = substr($timezone, 0, 1);
			$hours_mod = (int) substr($timezone, 1, 2);
			$mins_mod = (int) substr($timezone, 3, 2);
			$hour_label = $hours_mod>1 ? 'hours' : 'hour';
			$strtotimearg = $modifier.$hours_mod.' '.$hour_label;
			if($mins_mod) {
				$mins_label = $mins_mod>1 ? 'minutes' : 'minute';
				$strtotimearg .= ' '.$mins_mod.' '.$mins_label;
			}
			$timestamp = strtotime($strtotimearg, $timestamp);
		}

		return $timestamp;
	}
}
