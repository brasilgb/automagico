import { AddButton, DeleteButton, EditButton } from "@/Components/Buttons"
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from "@/Components/Card"
import FlashMessage from "@/Components/FlashMessage"
import InputSearch from "@/Components/InputSearch"
import { BreadCrumbTop, HeaderContent, TitleTop } from "@/Components/PageTop"
import Pagination from "@/Components/Pagination"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/Components/Table"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { roleUserByValue, statusValueByLabel } from "@/Utils/functions"
import { Head, usePage } from '@inertiajs/react'
import moment from "moment"
import React, { Fragment } from 'react'
import { IoPeopleSharp } from "react-icons/io5"

const User = ({ users }: any) => {
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
            <Head title="Usuários" />
            <main className=''>
                <Card>
                    <CardContainer>
                        <CardHeader>
                            <CardHeaderContent>
                                <InputSearch
                                    placeholder={"Buscar por nome"}
                                    url={"users.index"}
                                />
                            </CardHeaderContent>
                            <CardHeaderContent>
                                <AddButton
                                    url={route('users.create')}
                                    label={"Usuário"}
                                />
                            </CardHeaderContent>
                        </CardHeader>
                        <FlashMessage message={'flash'} />
                        <CardBody className="p-1">
                            <Table className="w-full">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nome</TableHead>
                                        <TableHead>E-mail</TableHead>
                                        <TableHead>Organização</TableHead>
                                        <TableHead>Permissões</TableHead>
                                        <TableHead>Cadastro</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead></TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users.data.map((user: any, idx: number) => (
                                        <Fragment key={user?.id}>
                                            <TableRow className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-gray-100'}`}>
                                                <TableCell>
                                                    {user?.name}
                                                </TableCell>
                                                <TableCell>
                                                    {user?.email}
                                                </TableCell>
                                                <TableCell>
                                                    {user?.organization?.name}
                                                </TableCell>
                                                <TableCell>
                                                    {roleUserByValue(user?.roles)}
                                                </TableCell>
                                                <TableCell>
                                                    {moment(
                                                        user?.created_at,
                                                    ).format("DD/MM/YYYY")}
                                                </TableCell>
                                                <TableCell>
                                                    <span className={`py-1 px-3 text-sm text-gray-100 font-medium rounded-full ${colorsStatus(user?.status)}`}>{statusValueByLabel(user?.status)}</span>
                                                </TableCell>
                                                <TableCell className="flex items-center justify-end gap-2">
                                                    <EditButton
                                                        url={route(
                                                            "users.edit",
                                                            user?.id,
                                                        )}
                                                    />
                                                    <DeleteButton
                                                        url="users.destroy"
                                                        param={user?.id}
                                                        identify={`o user ${user?.name}`}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                        </Fragment>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardBody>
                        {users.length > 15 &&
                            <CardFooter>
                                <Pagination data={users} />
                            </CardFooter>
                        }
                    </CardContainer>
                    <CardFooter>
                        <></>
                    </CardFooter>
                </Card>
            </main>
        </AuthenticatedLayout >
    )
}

export default User