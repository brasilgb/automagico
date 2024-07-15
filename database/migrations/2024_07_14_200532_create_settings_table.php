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
        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('organization_id')->nullable()->constrained();
            $table->string('logo', 100)->nullable();
            $table->string('headerbg')->nullable();
            $table->string('headertext')->nullable();
            $table->string('buttonbg')->nullable();
            $table->string('buttontext')->nullable();
            $table->string('footerbg')->nullable();
            $table->string('footertext')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
