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
			 * @var \SimplePie $feed
			 */
			$feed = \Feeds::make($request->get('url_xml'));
			
			//todos os itens
			$items = $feed->get_items();
			
			/**
			 * @var Portal $portal
			 */
			$portal = Portal::firstOrCreate([
				'nome_portal' => $feed->get_title(),
				'site' => $feed->get_link(),
				'email' => $feed->get_author()
				]);
			
			/**
			 * todos os itens do rss
			 * @var \SimplePie_Item $item
			 */
			foreach ($items as $item) {
				Noticia::create([
					'titulo' => $item->get_title(),
					'id_portal' => $portal->id_portal,
					'conteudo' => substr($item->get_description(), 0, 255),
					'gravata' => substr($item->get_description(), 0, 200),
					'link' => $item->get_link(),
					'data' => $item->get_date('Y-m-d')
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
}
