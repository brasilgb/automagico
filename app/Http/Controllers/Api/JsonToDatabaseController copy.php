<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Association;
use App\Models\Goal;
use App\Models\Sale;
use App\Models\Company;
use App\Models\Scopes\OrganizationScope;
use App\Models\Total;
use Illuminate\Http\Request;

class JsonToDatabaseController extends Controller
{
    public function responseError($type)
    {
        return response()->json([
            "response" => [
                "message" => "CNPJ Inexistente na base de dados de filiais ($type)!",
            ],
        ], 201);
    }
    public function responseInsert($type)
    {
        return response()->json([
            "response" => [
                "message" => "Dados de $type cadastrados com sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }
    public function responseUpdate($type)
    {
        return response()->json([
            "response" => [
                "message" => "Dados de $type alterado com sucesso!",
                "success" => true,
                "status" => 201,
            ],
        ], 201);
    }

    public function index(Request $request)
    {
        // static::withoutGlobalScope(OrganizationScope::class);
        // Association::withoutGlobalScope(OrganizationScope::class);
        // Total::withoutGlobalScope(OrganizationScope::class);

        if ($request->type === "venda") {
            $salesdesc = Sale::where('cnpj', $request->dbdata[0]["resumo_cnpj"])->first();
            $compop = Company::where('cnpj', $request->dbdata[0]["resumo_cnpj"]);
            foreach ($request->dbdata as $dbdata) {
                $dataven[] = [
                    "organization_id" => $compop->first()->organization_id,
                    "key" => $compop->first()->organization_id . $dbdata['resumo_codfil'] . $dbdata['resumo_cnpj'] . $dbdata['resumo_datmvt'],
                    "cnpj" => $dbdata['resumo_cnpj'],
                    "filial" => $dbdata['resumo_codfil'],
                    "descfilial" => $dbdata['resumo_desfil'],
                    "dtvenda" => $dbdata['resumo_datmvt'],
                    "anomes" => substr($dbdata['resumo_datmvt'], 0, 6),
                    "valdevolucao" => $dbdata['resumo_valdev'],
                    "valvenda" => $dbdata['resumo_valven'],
                    "margem" => $dbdata['resumo_margem'],
                    "representa" => $dbdata['resumo_presen'],
                    "valmeta" => $dbdata['resumo_metdia']
                ];
            }
            $existcnpj = $compop->exists();
            if (!$existcnpj) {
                return $this->responseError('venda');
            } else {
                if ($salesdesc->count() == 0) {
                    Sale::insert($dataven);
                    return $this->responseInsert('venda');
                } else {
                    foreach ($request->dbdata as $dbdata) {
                        Sale::where('key', $compop->first()->organization_id . $dbdata['resumo_codfil'] . $dbdata['resumo_cnpj'] . $dbdata['resumo_datmvt'])->delete();
                    }
                    Sale::insert($dataven);
                    return $this->responseUpdate('venda');
                }
            }
        }

        if ($request->type === "assoc") {
            $salesdesc = Association::where('cnpj', $request->dbdata[0]["assoc_cnpj"])->first();
            $compop = Company::where('cnpj', $request->dbdata[0]["assoc_cnpj"]);
            foreach ($request->dbdata as $dbdata) {
                $datass[] = [
                    "organization_id" => $compop->first()->organization_id,
                    "key" => $compop->first()->organization_id . $dbdata['assoc_filial'] . $dbdata['assoc_cnpj'] . $dbdata['assoc_datmvt'] . $dbdata['assoc_ass'],
                    "cnpj" => $dbdata['assoc_cnpj'],
                    "filial" => $dbdata['assoc_filial'],
                    "dtvenda" => $dbdata['assoc_datmvt'],
                    "assoc" => $dbdata['assoc_ass'],
                    "descassoc" => $dbdata['assoc_desass'],
                    "valdevolucao" => $dbdata['assoc_valdev'],
                    "valvenda" => $dbdata['assoc_valven'],
                    "margem" => $dbdata['assoc_margem'],
                    "representa" => $dbdata['assoc_repres'],
                    "valmeta" => $dbdata['assoc_metdia']
                ];
            }
            $existcnpj = $compop->exists();
            if (!$existcnpj) {
                return $this->responseError('associação');
            } else {
                if ($salesdesc->count() == 0) {
                    Association::insert($datass);
                    return $this->responseInsert('associação');
                } else {
                    foreach ($request->dbdata as $dbdata) {
                        Association::where('key', $compop->first()->organization_id . $dbdata['assoc_filial'] . $dbdata['assoc_cnpj'] . $dbdata['assoc_datmvt'] . $dbdata['assoc_ass'])->delete();
                    }
                    Association::insert($datass);
                    return $this->responseUpdate('associação');
                }
            }
        }

        if ($request->type ===  "total") {
            $salesdesc = Total::where('cnpj', $request->dbdata[0]["total_cnpj"])->first();
            $compop = Company::where('cnpj', $request->dbdata[0]["total_cnpj"]);
            foreach ($request->dbdata as $dbdata) {
                $datatot[] = [
                    "organization_id" => $compop->first()->organization_id,
                    "key" => $compop->first()->organization_id . $dbdata['total_filial'] . $dbdata['total_cnpj'] . $dbdata['total_datatu'],
                    "cnpj" => $dbdata['total_cnpj'],
                    "filial" => $dbdata['total_filial'],
                    "datatu" => $dbdata['total_datatu'],
                    "valdev" => $dbdata['total_valdev'],
                    "valven" => $dbdata['total_valven'],
                    "margem" => $dbdata['total_margem'],
                    "permet" => $dbdata['total_permet'],
                    "projec" => $dbdata['total_projec'],
                    "valjur" => $dbdata['total_valjur'],
                    "perjur" => $dbdata['total_perjur'],
                    "valina" => $dbdata['total_valina'],
                    "perina" => $dbdata['total_perina'],
                    "valest" => $dbdata['total_valest'],
                    "valmeta" => $dbdata['total_meta'],
                ];
            }
            $existcnpj = $compop->exists();
            if (!$existcnpj) {
                return $this->responseError('total');
            } else {
                if ($salesdesc->count() == 0) {
                    Total::insert($datatot);
                    return $this->responseInsert('total');
                } else {
                    foreach ($request->dbdata as $dbdata) {
                        Total::where('key', $compop->first()->organization_id . $dbdata['total_filial'] . $dbdata['total_cnpj'] . $dbdata['total_datatu'])->delete();
                    }
                    Total::insert($datatot);
                    return $this->responseUpdate('total');
                }
            }
        }
    }
}
