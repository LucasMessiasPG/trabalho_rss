<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Portal extends Model
{
  protected $table = 'portal';
	protected $primaryKey = 'id_portal';
	protected $fillable = ['nome_portal','site','email'];
}
