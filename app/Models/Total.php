<?php

namespace App\Models;

use App\Models\Scopes\CompanyScope;
use App\Models\Scopes\OrganizationScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Total extends Model
{
    use HasFactory;

    protected $fillable = [
        'organization_id',
        'company_id',
        'key',
        'cnpj',
        'datatu',
        'valdev',
        'valven',
        'margem',
        'permet',
        'projec',
        'valjur',
        'perjur',
        'valina',
        'perina',
        'valest',
        'valmeta'
    ];
    // protected $guarded = ['id'];

    // protected static function boot()
    // {
    //     parent::boot();
    //     // static::addGlobalScope(new OrganizationScope);
    //     static::addGlobalScope(new CompanyScope);
    // }
    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
