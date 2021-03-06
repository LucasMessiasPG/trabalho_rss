<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::any('/', function () {
	return view('documentacao');
});
Route::group(['prefix'=>'portal'],function(){
	Route::post('filter','PortalController@filter');
	Route::post('create','PortalController@store');
	Route::post('update','PortalController@update');
	Route::post('delete','PortalController@destroy');
});
Route::group(['prefix'=>'noticia'],function(){
	Route::post('create','NoticiaController@store');
	Route::post('update','NoticiaController@update');
	Route::post('delete','NoticiaController@destroy');
});
Route::group(['prefix'=>'comentario'],function(){
	Route::get('get/{id_noticia}','ComentarioController@get');
	Route::post('create','ComentarioController@store');
	Route::post('update','ComentarioController@update');
	Route::post('delete','ComentarioController@destroy');
});
Route::group(['prefix'=>'imagem'],function(){
	Route::post('create','ImagemController@store');
	Route::post('update','ImagemController@update');
	Route::post('delete','ImagemController@destroy');
});
Route::group(['prefix'=>'rss'],function(){
	Route::post('import','RssController@import');
	Route::get('export/{pesquisa?}','RssController@export');
	Route::post('filter','RssController@filter');
	Route::get('validation_xml', function () {
		return view('schema');
	});
	Route::get('ultimas_noticias','RssController@ultimasNoticias');
});