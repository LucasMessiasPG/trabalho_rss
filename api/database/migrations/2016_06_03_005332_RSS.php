<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RSS extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('portal', function (Blueprint $table) {
            $table->increments('id_portal');
            $table->string('nome_portal')->nullable();
            $table->string('site')->nullable();
            $table->string('email')->nullable();
            $table->timestamps();
        });

        Schema::create('noticia', function (Blueprint $table) {
            $table->increments('id_noticia');
            $table->integer('id_portal');
            $table->string('titulo');
            $table->date('data');
            $table->string('gravata');
            $table->string('conteudo');
            $table->string('link');
            $table->timestamps();
            $table->foreign('id_portal')
                ->references('id_portal')->on('portal')
                ->onDelete('cascade');
        });

        Schema::create('comentarios', function (Blueprint $table) {
            $table->increments('id_comentario');
            $table->integer('id_noticia');
            $table->string('comentario');
            $table->string('email');
            $table->timestamps();
            $table->foreign('id_noticia')
                ->references('id_noticia')->on('noticia')
                ->onDelete('cascade');
        });

        Schema::create('imagens', function (Blueprint $table) {
            $table->increments('id_imagem');
            $table->integer('id_noticia');
            $table->string('imagem');
            $table->boolean('destaque');
            $table->timestamps();
            $table->foreign('id_noticia')
                ->references('id_noticia')->on('noticia')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('imagens');
        Schema::drop('comentarios');
        Schema::drop('noticia');
        Schema::drop('portal');
    }
}
