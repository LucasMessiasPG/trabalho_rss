<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Portal
 * @property int id_portal
 * @property string nome_portal
 * @property string site
 * @property string email
 * @package App
 */
class Portal extends Model
{
  protected $table = 'portal';
	protected $primaryKey = 'id_portal';
	protected $fillable = ['nome_portal','site','email'];
}
