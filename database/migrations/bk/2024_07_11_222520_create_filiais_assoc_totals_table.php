<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assoc_totals', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->nullable()->constrained();
            $table->string('key')->index();
            $table->string('cnpj');
            $table->integer('filial');
            $table->string('dtvenda');
            $table->string('assoc');
            $table->string('descassoc');
            $table->decimal('valdevolucao', 15,2);
            $table->decimal('valvenda', 15,2);
            $table->decimal('valmeta', 15,2);
            $table->decimal('margem', 15,2);
            $table->decimal('representa', 15,2);
            $table->timestamp('created_at')->useCurrent();
            $table->timestamp('updated_at')->nullable()->useCurrentOnUpdate();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assoc_totals');
    }
};
