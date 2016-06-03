<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;
use App\Imagem;

class ImagemController extends Controller
{
	public function store(Request $request)
	{
		try{
			
			
			$portal = Imagem::create($request->all());
			
			$this->_return(true,'Imagem inserido',$portal);
		}catch (\Exception $e){
			$this->_return(false,'Erro ao inserir imagem',$e);
		}
	}
	
	public function update(Request $request)
	{
		try{
		            
		  $portal = Imagem::find($request->id_portal);
			$portal->update($request->all());
			
			$this->_return(true,'Imagem alterado');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao alterar imagem');
		}
	}
	public function destroy(Request $request)
	{
		try{
		            
		  $portal = Imagem::find($request->id_portal);
			$portal->delete();
			
			$this->_return(true,'Imagem excluido');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao excluir imagem');
		}
	}
}
