import { AddButton, SaveButton } from '@/Components/Buttons'
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from '@/Components/Card'
import FlashMessage from '@/Components/FlashMessage'
import { BreadCrumbTop, HeaderContent, TitleTop } from '@/Components/PageTop'
import { useAuthContext } from "@/Contexts"
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router, useForm, usePage } from '@inertiajs/react'
import { InertiaFormProps } from '@inertiajs/react/types/useForm'
import React, { useEffect } from 'react'
import { SlOrganization } from 'react-icons/sl'

interface ClientesProps {
    logo: any | null;
    headerbg: string;
    headertext: string;
    buttonbg: string;
    buttontext: string;
    buttonbgactive: string;
    buttontextactive: string;
    secundarybarbg: string;
    secundarybartext: string;
    analisebg: string;
    analisetext: string;
    buttonanalisebg: string;
    buttonanalisetext: string;
    buttonanalisebgactive: string;
    buttonanalisetextactive: string;
    footerbg: string;
    footertext: string;
}

const Settings = ({ settings }: any) => {
    const { flash, auth } = usePage().props as any;
    const {
        data,
        setData,
    }: InertiaFormProps<ClientesProps> = useForm({
        logo: null,
        headerbg: settings.headerbg,
        headertext: settings.headertext,
        buttonbg: settings.buttonbg,
        buttontext: settings.buttontext,
        buttonbgactive: settings.buttonbgactive,
        buttontextactive: settings.buttontextactive,
        secundarybarbg: settings.secundarybarbg,
        secundarybartext: settings.secundarybartext,
        analisebg: settings.analisebg,
        analisetext: settings.analisetext,
        buttonanalisebg: settings.buttonanalisebg,
        buttonanalisetext: settings.buttonanalisetext,
        buttonanalisebgactive: settings.buttonanalisebgactive,
        buttonanalisetextactive: settings.buttonanalisetextactive,
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
            buttonbgactive: data.buttonbgactive,
            buttontextactive: data.buttontextactive,
            secundarybarbg: data.secundarybarbg,
            secundarybartext: data.secundarybartext,
            analisebg: data.analisebg,
            analisetext: data.analisetext,
            buttonanalisebg: data.buttonanalisebg,
            buttonanalisetext: data.buttonanalisetext,
            buttonanalisebgactive: data.buttonanalisebgactive,
            buttonanalisetextactive: data.buttonanalisetextactive,
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
                    <FlashMessage message={flash} />
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
                                            disabled={auth.user?.company_id === null ? false : true}
                                            id="logo"
                                            type="file"
                                            onChange={(e: any) =>
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
                                <div className="border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4">
                                    <div className="uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300">Estilo da barra de menus</div>
                                    <div className='md:grid grid-cols-6 gap-4 mt-4'>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="headerbg"
                                            >
                                                Cor de fundo barra de menu
                                            </label>
                                            <input
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="headerbg"
                                                type="color"
                                                value={data.headerbg}
                                                onChange={(e) =>
                                                    setData(
                                                        "headerbg",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="headertext"
                                            >
                                                Cor de texto barra de menu
                                            </label>
                                            <input
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="headertext"
                                                type="color"
                                                value={data.headertext}
                                                onChange={(e) =>
                                                    setData(
                                                        "headertext",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
                                            />
                                        </div>

                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="buttonbg"
                                            >
                                                Cor de fundo do botão
                                            </label>
                                            <input
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="buttonbg"
                                                type="color"
                                                value={data.buttonbg}
                                                onChange={(e) =>
                                                    setData(
                                                        "buttonbg",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
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
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="buttontext"
                                                type="color"
                                                value={data.buttontext}
                                                onChange={(e) =>
                                                    setData(
                                                        "buttontext",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="buttonbgactive"
                                            >
                                                Cor de fundo do botão ativo
                                            </label>
                                            <input
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="buttonbgactive"
                                                type="color"
                                                value={data.buttonbgactive}
                                                onChange={(e) =>
                                                    setData(
                                                        "buttonbgactive",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="buttontextactive"
                                            >
                                                Cor de texto do botão ativo
                                            </label>
                                            <input
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="buttontextactive"
                                                type="color"
                                                value={data.buttontextactive}
                                                onChange={(e) =>
                                                    setData(
                                                        "buttontextactive",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {auth?.user?.organization_id !== null &&
                                    <>
                                        <div className="border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4">
                                            <div className="uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300">Estilo barra secundária</div>
                                            <div className='md:grid grid-cols-2 gap-4 mt-2'>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="secundarybarbg"
                                                    >
                                                        Cor de fundo da barra
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="secundarybarbg"
                                                        type="color"
                                                        value={data.secundarybarbg}
                                                        onChange={(e) =>
                                                            setData(
                                                                "secundarybarbg",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="secundarybartext"
                                                    >
                                                        Cor de texto da barra
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="secundarybartext"
                                                        type="color"
                                                        value={data.secundarybartext}
                                                        onChange={(e) =>
                                                            setData(
                                                                "secundarybartext",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4">
                                            <div className="uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300">Estilo da barra de análise</div>
                                            <div className='md:grid grid-cols-6 gap-4 mt-4'>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="analisebg"
                                                    >
                                                        Cor de fundo barra de análise
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="analisebg"
                                                        type="color"
                                                        value={data.analisebg}
                                                        onChange={(e) =>
                                                            setData(
                                                                "analisebg",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="analisetext"
                                                    >
                                                        Cor de texto barra análise
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="analisetext"
                                                        type="color"
                                                        value={data.analisetext}
                                                        onChange={(e) =>
                                                            setData(
                                                                "analisetext",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>

                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="buttonanalisebg"
                                                    >
                                                        Cor de fundo do botão análise
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="buttonanalisebg"
                                                        type="color"
                                                        value={data.buttonanalisebg}
                                                        onChange={(e) =>
                                                            setData(
                                                                "buttonanalisebg",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="buttonanalisetext"
                                                    >
                                                        Cor de texto do botão
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="buttonanalisetext"
                                                        type="color"
                                                        value={data.buttonanalisetext}
                                                        onChange={(e) =>
                                                            setData(
                                                                "buttonanalisetext",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="buttonanalisebgactive"
                                                    >
                                                        Cor de fundo do botão ativo
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="buttonanalisebgactive"
                                                        type="color"
                                                        value={data.buttonanalisebgactive}
                                                        onChange={(e) =>
                                                            setData(
                                                                "buttonanalisebgactive",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label
                                                        className="label-form"
                                                        htmlFor="buttonanalisetextactive"
                                                    >
                                                        Cor de texto do botão ativo
                                                    </label>
                                                    <input
                                                        disabled={auth.user?.company_id === null ? false : true}
                                                        id="buttonanalisetextactive"
                                                        type="color"
                                                        value={data.buttonanalisetextactive}
                                                        onChange={(e) =>
                                                            setData(
                                                                "buttonanalisetextactive",
                                                                e.target.value,
                                                            )
                                                        }
                                                        className="input-form !h-10 w-full"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className="border border-gray-300 rounded-md p-2 md:p-4 mt-2 md:mt-4">
                                    <div className="uppercase text-gray-500 text-xs font-semibold border-b border-b-gray-300">Estilo do rodapé</div>
                                    <div className='md:grid grid-cols-2 gap-4 mt-2'>
                                        <div className="flex flex-col">
                                            <label
                                                className="label-form"
                                                htmlFor="footerbg"
                                            >
                                                Cor de fundo do rodapé
                                            </label>
                                            <input
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="footerbg"
                                                type="color"
                                                value={data.footerbg}
                                                onChange={(e) =>
                                                    setData(
                                                        "footerbg",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
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
                                                disabled={auth.user?.company_id === null ? false : true}
                                                id="footertext"
                                                type="color"
                                                value={data.footertext}
                                                onChange={(e) =>
                                                    setData(
                                                        "footertext",
                                                        e.target.value,
                                                    )
                                                }
                                                className="input-form !h-10 w-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <SaveButton />
                        </CardFooter>
                    </form>
                </CardContainer>
            </Card>
        </AuthenticatedLayout>
    )
}

export default Settings