<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

abstract class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;
	
	public function _return($status , $message , $json = null){
		if($status == 'success' || $status == true) {
			if ($json != null)
				return ['status' => 'success', 'msg' => $message, 'json' => $json];
			else
				return ['status' => 'success', 'msg' => $message];
		}elseif($status == 'error' || $status == false){
			if ($json != null)
				return ['status' => 'error', 'msg' => $message, 'erro' => [$json->getMessage(),$json->getLine(),$json->getFile()]];
			else
				return ['status' => 'error', 'msg' => $message];
		}else{
			if ($json != null)
				return ['status' => $status, 'msg' => $message, 'json' => $json];
			else
				return ['status' => $status, 'msg' => $message];
		}
	}
}
