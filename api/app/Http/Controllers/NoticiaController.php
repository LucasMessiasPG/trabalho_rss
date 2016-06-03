<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;
use App\Noticia;

class NoticiaController extends Controller
{
	public function store(Request $request)
	{
		try{
			
			
			$portal = Noticia::create($request->all());
			
			$this->_return(true,'Noticia inserido',$portal);
		}catch (\Exception $e){
			$this->_return(false,'Erro ao inserir noticia',$e);
		}
	}
	
	public function update(Request $request)
	{
		try{
		            
		  $portal = Noticia::find($request->id_portal);
			$portal->update($request->all());
			
			$this->_return(true,'Noticia alterado');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao alterar noticia');
		}
	}
	public function destroy(Request $request)
	{
		try{
		            
		  $portal = Noticia::find($request->id_portal);
			$portal->delete();
			
			$this->_return(true,'Noticia excluido');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao excluir noticia');
		}
	}
}
