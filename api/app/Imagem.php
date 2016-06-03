<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagem extends Model
{
  protected $table = 'imagem';
	protected $primaryKey = 'id_imagem';
	protected $fillable = ['id_noticia','imagem','destaque'];
}
