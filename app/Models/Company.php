<?php

namespace App\Models;

use App\Models\Scopes\CompanyScope;
use App\Models\Scopes\OrganizationScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'company_id',
    //     'altername',
    //     'corpreason',
    //     'cnpj',
    //     'statereg',
    //     'subnumber',
    //     'subname',
    //     'address',
    //     'number',
    //     'cep',
    //     'county',
    //     'state',
    //     'neighborhood',
    //     'telephone',
    //     'whatsapp',
    //     'observation'
    // ];

    protected $guarded = ['id'];

    protected static function boot()
    {
        parent::boot();
        static::addGlobalScope(new OrganizationScope);
    }
    
    public function organization()
    {
        return $this->belongsTo(Organization::class);
    }
}
