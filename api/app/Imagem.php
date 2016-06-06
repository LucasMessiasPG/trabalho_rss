<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Imagem extends Model
{
  protected $table = 'imagens';
	protected $primaryKey = 'id_imagem';
	protected $fillable = ['id_noticia','imagem','destaque'];
}
