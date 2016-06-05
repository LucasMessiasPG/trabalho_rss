<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;
use App\Portal;

class PortalController extends Controller
{
	public function filter(Request $request)
	{
		try{

			$campos = [
				'nome_portal',
				'site',
				'email',
				'id_portal'
			];

			$ilike = ['nome_portal','site','email'];
			$portals = Portal::orderBy('nome_portal');

			foreach ($request->only($campos) as $field => $value) {
				if(!empty($value)){
					if(in_array($field,$ilike)){
						$portals->where($field,'ilike',$value);
					}else{
						$portals->where($field,'=',$value);
					}
				}

			}

			return $this->_return(true,'Portal filtrado',$portals->get()->toArray());
		}catch(\Exception $e){
			return $this->_return(false,'Erro ao filtrar portal',$e);
		}
	}

	public function store(Request $request)
	{
		try{
			
			
			$portal = Portal::create($request->all());
			
			return $this->_return(true,'Portal inserido',$portal);
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao inserir portal',$e);
		}
	}
	
	public function update(Request $request)
	{
		try{
		            
		  $portal = Portal::find($request->id_portal);
			$portal->update($request->all());

			return $this->_return(true,'Portal alterado');
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao alterar portal');
		}
	}
	public function destroy(Request $request)
	{
		try{
		            
		  $portal = Portal::find($request->id_portal);
			$portal->delete();

			return $this->_return(true,'Portal excluido');
		}catch (\Exception $e){
			return $this->_return(false,'Erro ao excluir portal');
		}
	}
}
