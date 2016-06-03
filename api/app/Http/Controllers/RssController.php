<?php

namespace App\Http\Controllers;

use App\Http\Requests\Request;

class RssController extends Controller
{
	public function import(Request $request)
	{
		try{
			
			// import rss
		            
		}catch (\Exception $e){
		  $this->_return(false,'Erro ao exportar rss',$e);
		}
	}
	
	public function export(Request $request)
	{
		try{
			
			// export rss
		            
		}catch (\Exception $e){
		  $this->_return(false,'Erro ao exportar rss',$e);  
		}
	}
	
	public function filter(Request $request)
	{
		try{
		            
		    // filter rss
		            
		}catch (\Exception $e){
		    $this->_return(false,'Erro ao filtrar rss',$e);
		}
	}
}
