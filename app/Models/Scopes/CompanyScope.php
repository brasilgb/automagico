<?php

namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class CompanyScope implements Scope
{
    /**
     * Apply the scope to a given Eloquent query builder.
     */
    public function apply(Builder $builder, Model $model): void
    {
        if(auth()->check() && auth()->user()->organization_id && !is_null(auth()->user()->organization_id)) {
            $builder->where('company_id', auth()->user()->company_id);
        }
    }
}
