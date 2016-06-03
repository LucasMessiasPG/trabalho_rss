<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Noticia extends Model
{
  protected $table = 'noticia';
	protected $primaryKey = 'id_noticia';
	protected $fillable = ['id_portal','titulo','data','gravata','conteudo','link'];
}
