<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;
use App\Portal;

class PortalController extends Controller
{
	public function store(Request $request)
	{
		try{
			
			
			$portal = Portal::create($request->all());
			
			$this->_return(true,'Portal inserido',$portal);
		}catch (\Exception $e){
			$this->_return(false,'Erro ao inserir portal',$e);
		}
	}
	
	public function update(Request $request)
	{
		try{
		            
		  $portal = Portal::find($request->id_portal);
			$portal->update($request->all());
			
			$this->_return(true,'Portal alterado');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao alterar portal');
		}
	}
	public function destroy(Request $request)
	{
		try{
		            
		  $portal = Portal::find($request->id_portal);
			$portal->delete();
			
			$this->_return(true,'Portal excluido');
		}catch (\Exception $e){
			$this->_return(false,'Erro ao excluir portal');
		}
	}
}
