<?php

namespace App\Http\Controllers;

use App\Comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{

	public function get($id_noticia)
	{
		try{

			$comentarios = Comentario::where('id_noticia','=',$id_noticia)
				->orderBy('created_at','desc')
				->take(10)
				->get()
				->toArray();

			return $this->_return(true,'Comentarios coletados',$comentarios);
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao pegar comentarios',$e);
		}
	}

	public function store(Request $request)
	{
		try{
			
			
			$portal = Comentario::create($request->all());
			
			return $this->_return(true,'Comentario inserido',$portal);
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao inserir comentario',$e);
		}
	}
	
	public function update(Request $request)
	{
		try{
		            
		  $portal = Comentario::find($request->id_portal);
			$portal->update($request->all());

			return $this->_return(true,'Comentario alterado');
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao alterar comentario');
		}
	}
	public function destroy(Request $request)
	{
		try{
		            
		  $portal = Comentario::find($request->id_portal);
			$portal->delete();

			return $this->_return(true,'Comentario excluido');
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao excluir comentario');
		}
	}
}
