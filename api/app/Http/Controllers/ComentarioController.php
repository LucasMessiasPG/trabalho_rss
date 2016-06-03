<?php

namespace App\Http\Controllers;

use App\Comentario;
use App\Http\Requests\Request;

class ComentarioController extends Controller
{
	public function store(Request $request)
	{
		try{
			
			
			$portal = Comentario::create($request->all());
			
			$this->_return(true,'Comentario inserido',$portal);
		}catch (\Exception $e){
			$this->_return(false,'Erro ao inserir comentario',$e);
		}
	}
	
	public function update(Request $request)
	{
		try{
		            
		  $portal = Comentario::find($request->id_portal);
			$portal->update($request->all());
			
			$this->_return(true,'Comentario alterado');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao alterar comentario');
		}
	}
	public function destroy(Request $request)
	{
		try{
		            
		  $portal = Comentario::find($request->id_portal);
			$portal->delete();
			
			$this->_return(true,'Comentario excluido');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao excluir comentario');
		}
	}
}
