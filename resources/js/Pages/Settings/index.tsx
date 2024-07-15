import { AddButton } from '@/Components/Buttons'
import { Card, CardBody, CardContainer, CardHeader, CardHeaderContent } from '@/Components/Card'
import FlashMessage from '@/Components/FlashMessage'
import InputSearch from '@/Components/InputSearch'
import { BreadCrumbTop, HeaderContent, TitleTop } from '@/Components/PageTop'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, useForm, usePage } from '@inertiajs/react'
import { InertiaFormProps } from '@inertiajs/react/types/useForm'
import React from 'react'
import { SlOrganization } from 'react-icons/sl'

interface ClientesProps {
    logo: any;
    headerbg: string;
    headertext: string;
    buttonbg: string;
    buttontext: string;
    footerbg: string;
    footertext: string;
}

const Settings = ({ settings }: any) => {
    const { flash } = usePage().props;
    const {
        data,
        setData,
        patch,
        progress,
        processing,
        errors,
    }: InertiaFormProps<ClientesProps> = useForm({
        logo: null,
        headerbg: settings.headerbg,
        headertext: settings.headertext,
        buttonbg: settings.buttonbg,
        buttontext: settings.buttontext,
        footerbg: settings.footerbg,
        footertext: settings.footertext
    });

    function handleSubmit(e: any) {
        e.preventDefault();
        router.post(`settings/${settings.id}`, {
            _method: "put",
            logo: data.logo,
            headerbg: data.headerbg,
            headertext: data.headertext,
            buttonbg: data.buttonbg,
            buttontext: data.buttontext,
            footerbg: data.footerbg,
            footertext: data.footertext,
        });
    }
    return (
        <AuthenticatedLayout>
            <Head title="Configurações" />
            <Card>
                <HeaderContent>
                    <TitleTop>
                        <SlOrganization size={30} />
                        <span className="ml-2">Configurações</span>
                    </TitleTop>
                    <BreadCrumbTop links={[{ url: null, label: "Configurações" }]} />
                </HeaderContent>
                <CardContainer>
                    <FlashMessage message={'flash'} />
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <CardBody>
                            <div className="px-3 my-4">
                                <div className="w-24 my-10">
                                    <img
                                        src={`/storage/images/${settings.logo ? settings.logo : "default.png"}`}
                                        alt="Imagem de logo"
                                    />
                                </div>
                                <div className="">
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="logo"
                                        >
                                            Logo da empresa
                                        </label>
                                        <input
                                            id="logo"
                                            type="file"
                                            onChange={(e) =>
                                                setData(
                                                    "logo",
                                                    e.target.files[0],
                                                )
                                            }
                                            className="block w-full text-base text-gray-600
                                            file:mr-4 file:py-2.5 file:px-4 file:rounded-l-md
                                            file:border-0 file:text-sm file:font-semibold
                                            file:bg-blue-700 file:text-gray-50 file:cursor-pointer
                                            hover:file:bg-blue-600 border border-gray-300 rounded-md bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div className='md:grid grid-cols-2 gap-4 mt-2'>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="headerbg"
                                        >
                                            Cor de fundo barra de menu
                                        </label>
                                        <input
                                            id="headerbg"
                                            type="color"
                                            value={data.headerbg}
                                            onChange={(e) =>
                                                setData(
                                                    "headerbg",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="headertext"
                                        >
                                            Cor de texto menu topo
                                        </label>
                                        <input
                                            id="headertext"
                                            type="color"
                                            value={data.headertext}
                                            onChange={(e) =>
                                                setData(
                                                    "headertext",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                </div>
                                <div className='md:grid grid-cols-2 gap-4 mt-2'>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="buttonbg"
                                        >
                                            Cor de fundo do botão
                                        </label>
                                        <input
                                            id="buttonbg"
                                            type="color"
                                            value={data.buttonbg}
                                            onChange={(e) =>
                                                setData(
                                                    "buttonbg",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="buttontext"
                                        >
                                            Cor de texto do botão
                                        </label>
                                        <input
                                            id="buttontext"
                                            type="color"
                                            value={data.buttontext}
                                            onChange={(e) =>
                                                setData(
                                                    "buttontext",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                </div>
                                <div className='md:grid grid-cols-2 gap-4 mt-2'>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="footerbg"
                                        >
                                            Cor de fundo do rodapé
                                        </label>
                                        <input
                                            id="footerbg"
                                            type="color"
                                            value={data.footerbg}
                                            onChange={(e) =>
                                                setData(
                                                    "footerbg",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <label
                                            className="label-form"
                                            htmlFor="footertext"
                                        >
                                            Cor de texto do rodapé
                                        </label>
                                        <input
                                            id="footertext"
                                            type="color"
                                            value={data.footertext}
                                            onChange={(e) =>
                                                setData(
                                                    "footertext",
                                                    e.target.value,
                                                )
                                            }
                                            className="input-form !p-0 !h-10 w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </form>
                </CardContainer>
            </Card>
        </AuthenticatedLayout>
    )
}

export default Settings