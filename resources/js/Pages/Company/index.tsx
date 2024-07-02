import { AddButton, DeleteButton, EditButton } from "@/Components/Buttons"
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card"
import Filiais from "@/Components/Empresas/Filiais"
import FlashMessage from "@/Components/FlashMessage"
import InputSearch from "@/Components/InputSearch"
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop"
import Pagination from "@/Components/Pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { colorsStatus, statusValueByLabel } from "@/Utils/functions"
import { maskCnpj, maskInscEstadual } from "@/Utils/mask"
import { Head, usePage } from '@inertiajs/react'
import moment from "moment"
import React, { Fragment } from 'react'
import { IoIosBusiness } from "react-icons/io"
import { IoPeopleSharp } from "react-icons/io5"

const Company = ({ companies }: any) => {
    const { flash } = usePage().props;

    return (
        <AuthenticatedLayout>
            <Head title="Dashboard" />

            <Card>
                <HeaderContent>
                    <TitleTop>
                        <IoIosBusiness size={30} />
                        <span className="ml-2">Filiais</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Filiais" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por nome ou cnpj"}
                                url={"companies.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={route('companies.create')}
                                label={"Filial"}
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={'flash'} />
                    <CardBody>
                        <Table className="bg-megb-blue-secundary w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Organização</TableHead>
                                    <TableHead>Nº Filial</TableHead>
                                    <TableHead>Filial</TableHead>
                                    <TableHead>CNPJ</TableHead>
                                    <TableHead>Insc. estadual</TableHead>
                                    <TableHead>Telefone</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {companies?.data.map((company: any, idx: number) => (
                                    <Fragment key={company.id}>
                                        <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                                            <TableCell className="">
                                                {company.organization.name}
                                            </TableCell>
                                            <TableCell>
                                                {company.subnumber}
                                            </TableCell>
                                            <TableCell>
                                                {company.subname}
                                            </TableCell>
                                            <TableCell>
                                                {maskCnpj(company.cnpj.toString())}
                                            </TableCell>
                                            <TableCell>
                                                {maskInscEstadual(company.statereg.toString())}
                                            </TableCell>
                                            <TableCell>
                                                {company.telephone}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    company.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${colorsStatus(company.status)}`}>{statusValueByLabel(company.status)}</span>
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <EditButton
                                                    url={route(
                                                        "companies.edit",
                                                        company.id,
                                                    )}
                                                />
                                                <DeleteButton
                                                    url="companies.destroy"
                                                    param={company.id}
                                                    identify={`o company ${company.subname}`}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    {companies.data.length === companies.per_Page &&
                        <CardFooter>
                            <Pagination data={companies} />
                        </CardFooter>
                    }
                </CardContainer>
            </Card>
        </AuthenticatedLayout >
    )
}

export default Company