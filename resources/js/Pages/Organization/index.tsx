import { AddButton, DBButton, DeleteButton, EditButton, FilialButton } from '@/Components/Buttons'
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from '@/Components/Card'
import FlashMessage from '@/Components/FlashMessage'
import InputSearch from '@/Components/InputSearch'
import { BreadCrumbTop, HeaderContent, TitleTop } from '@/Components/PageTop'
import Pagination from '@/Components/Pagination'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/Components/Table'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { statusValueByLabel } from '@/Utils/functions'
import { Head, usePage } from '@inertiajs/react'
import moment from 'moment'
import React, { Fragment, useState } from 'react'
import { SlOrganization } from "react-icons/sl";

const Organization = ({ organizations }: any) => {
    const { flash } = usePage().props as any;
    const colorsStatus = (status: string) => {
        switch (status) {
            case 'active':
                return "bg-green-600/50 border border-green-600 text-green-800 text-xs uppercase";
            case 'waiting':
                return "bg-sky-600/50 border border-sky-600 text-sky-800 text-xs uppercase";
            case 'suspended':
                return "bg-orange-600/50 border border-orange-600 text-orange-800 text-xs uppercase";
            case 'canceled':
                return "bg-red-600/50 border border-red-600 text-red-800 text-xs uppercase";
        }
    }
    return (
        <AuthenticatedLayout>
            <Head title="Organizações" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <SlOrganization size={30} />
                        <span className="ml-2">Organizações</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Organizações" }]} />
                </HeaderContent>
                <CardContainer>
                    <CardHeader>
                        <CardHeaderContent>
                            <InputSearch
                                placeholder={"Buscar por nome"}
                                url={"organizations.index"}
                            />
                        </CardHeaderContent>
                        <CardHeaderContent>
                            <AddButton
                                url={route('organizations.create')}
                                label={"Organização"}
                                title='Adicionar organização'
                            />
                        </CardHeaderContent>
                    </CardHeader>
                    <FlashMessage message={flash} />
                    <CardBody>
                        <Table className="w-full">
                            <TableHeader>
                                <TableRow>
                                    <TableHead><div className="">Organização</div></TableHead>
                                    <TableHead>Filiais</TableHead>
                                    <TableHead>Cadastro</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {organizations?.data.map((organization: any, idx: number) => (
                                    <Fragment key={organization.id}>
                                        <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                                            <TableCell className="">
                                                {organization.name}
                                            </TableCell>
                                            <TableCell>
                                                {organization.company.length}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    organization.created_at,
                                                ).format("DD/MM/YYYY")}
                                            </TableCell>
                                            <TableCell>
                                                <span className={`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${colorsStatus(organization.status)}`}>{statusValueByLabel(organization.status)}</span>
                                            </TableCell>
                                            <TableCell className="flex items-center justify-end gap-2">
                                                <DBButton
                                                    url="organizations.destroy"
                                                    param={organization.id}
                                                    identify={`${organization.name}`}
                                                    title='Limpar Base de dados'
                                                />
                                                <FilialButton
                                                    url={`companies?o=${organization.id}`}
                                                    title="Filiais da organização"
                                                />
                                                <EditButton
                                                    url={route(
                                                        "organizations.edit",
                                                        organization.id,
                                                    )}
                                                    title='Editar organização'
                                                />
                                                <DeleteButton
                                                    url="organizations.destroy"
                                                    param={organization.id}
                                                    identify={`a organização ${organization.name}`}
                                                    title='Deletar organização'
                                                />
                                            </TableCell>
                                        </TableRow>
                                    </Fragment>
                                ))}
                            </TableBody>
                        </Table>
                    </CardBody>
                    {organizations.data.length === organizations.per_page &&
                        <CardFooter>
                            <Pagination data={organizations} />
                        </CardFooter>
                    }
                </CardContainer>
            </Card>
        </AuthenticatedLayout >
    )
}

export default Organization