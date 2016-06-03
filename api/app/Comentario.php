<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comentario extends Model
{
  protected $table = 'comentario';
	protected $primaryKey = 'id_comentario';
	protected $fillable = ['id_noticia','comentario','email'];
}
