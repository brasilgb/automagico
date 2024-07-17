<?php

namespace App\Models;

use App\Models\Scopes\OrganizationScope;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Settings extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    // protected $fillable = [
    //     'logo',
    //     'headerbg',
    //     'headertext',
    //     'buttonbg',
    //     'buttontext',
    //     'footerbg',
    //     'footertext'
    // ];

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
