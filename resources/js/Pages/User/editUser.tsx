import { AddButton, BackButton, SaveButton } from '@/Components/Buttons'
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from '@/Components/Card'
import FlashMessage from '@/Components/FlashMessage'
import { BreadCrumbTop, HeaderContent, TitleTop } from '@/Components/PageTop'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { roleUser, statusUser } from "@/Utils/dataSelect"
import { Head, useForm, usePage } from '@inertiajs/react'
import { useEffect, useState } from "react"
import { IoEye, IoEyeOff, IoPeopleSharp } from 'react-icons/io5'

const editUser = ({user, organizations}: any) => {
  const { flash, auth } = usePage().props as any;
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [filterSearch, setFilterSearch] = useState<any>([]);
  const { data, setData, put, reset, processing, errors } = useForm({
    organization_id: user.organization_id,
    organization: user.organization?.name,
    company_id: user.company_id,
    name: user.name,
    email: user.email,
    password: "",
    roles: user.roles,
    status: user.status,
    password_confirmation: "",
  });
  
  function handleSubmit(e: any) {
    e.preventDefault();
    put(route("users.update", user.id));
  }

  const handleSearch = (value: any) => {
    const client = value.toLowerCase();
    const result = organizations?.filter((cl: any) => (cl.name.toLowerCase().includes(client)));
    setFilterSearch(result);
  };

  useEffect(() => {
    const filter = data.organization;
    if (filter === "") {
      setFilterSearch([]);
    }
  }, [data]);

  const handleChangeCustomer = (id: any, nome: any) => {
    setData((data) => ({ ...data, organization_id: id }));
    setData((data) => ({ ...data, organization: nome }));
    setFilterSearch([]);
  };

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <main className=''>
        <Card>
          <HeaderContent>
            <TitleTop>
              <IoPeopleSharp size={30} />
              <span className="ml-2">Usuários</span>
            </TitleTop>
            <BreadCrumbTop
              links={[
                { url: "/users", label: "Usuários" },
                { url: null, label: "Adicionar usuário" },
              ]}
            />
          </HeaderContent>
          <CardContainer>
          <FlashMessage message={flash} />
            <CardHeader>
              <CardHeaderContent>
                <BackButton url={"/users"} label={"Voltar"} />
              </CardHeaderContent>
              <CardHeaderContent>
                <></>
              </CardHeaderContent>
            </CardHeader>
            <form onSubmit={handleSubmit} autoComplete="off">
              <CardBody className=" border-y border-gray-100">
                <div className="px-3 my-4">
                  <div className="grid md:grid-cols-6 gap-4">
                  {auth.user.organization_id !== null &&
                      <div className="flex flex-col col-span-2 relative">
                        <label
                          className="label-form"
                          htmlFor="Organização"
                        >
                          Filial
                        </label>
                        <select
                          name="company_id"
                          id="company_id" onChange={(e) => {
                            setData(
                              "company_id",
                              e.target.value,
                            )
                            handleSearch(e.target.value)
                          }}
                          className="input-form"
                        >
                          <option value="">Selecione a filial</option>
                          {organizations[0].company?.map((comp: any, idx: number) => (
                            <option value={comp.id}>{comp.altername}</option>
                          ))}
                        </select>
                        {errors.company_id && (
                          <div className="text-sm text-red-500">
                            {errors.company_id}
                          </div>
                        )}
                      </div>
                    }
                    {auth.user.organization_id === null &&
                      <div className="flex flex-col col-span-2 relative">
                        <label
                          className="label-form"
                          htmlFor="Organização"
                        >
                          Organização
                        </label>
                        <input
                          type="text"
                          value={data.organization_id}
                          onChange={(e) =>
                            setData(
                              "organization_id",
                              e.target.value,
                            )
                          }
                          className="hidden"
                        />
                        <input
                          id="organization"
                          type="text"
                          value={data.organization}
                          onChange={(e) => {
                            setData(
                              "organization",
                              e.target.value,
                            )
                            handleSearch(e.target.value)
                          }}
                          className="input-form"
                        />
                        {filterSearch.length > 0 &&
                          <div className="absolute z-20 bg-gray-50 border-2 border-white shadow-md w-full rounded-sm top-16 max-h-52 overflow-y-auto">
                            <ul className="p-1">
                              {filterSearch.map((tenant: any, idx: number) => (
                                <li key={idx} className={`flex items-center justify-normal ${idx < (filterSearch.length - 1) ? 'border-b border-gray-200' : ''}`}>
                                  <div
                                    className="text-sm text-gray-600 p-1 cursor-pointer inline-block w-full"
                                    onClick={() => handleChangeCustomer(tenant.id, tenant.name)}
                                  >
                                    {tenant.name}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        }
                        {errors.organization_id && (
                          <div className="text-sm text-red-500">
                            {errors.organization_id}
                          </div>
                        )}
                      </div>
                    }
                    <div className="flex flex-col col-span-2">
                      <label
                        className="label-form"
                        htmlFor="nome"
                      >
                        Nome
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) =>
                          setData("name", e.target.value)
                        }
                        className="input-form"
                      />
                      {errors.name && (
                        <div className="text-sm text-red-500">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col col-span-2">
                      <label
                        className="label-form"
                        htmlFor="email"
                      >
                        E-mail
                      </label>
                      <input
                        id="email"
                        type="text"
                        value={data.email}
                        onChange={(e) =>
                          setData("email", e.target.value)
                        }
                        className="input-form"
                      />
                      {errors.email && (
                        <div className="text-red-500">
                          {errors.email}
                        </div>
                      )}
                    </div>

                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:mt-6 mt-4">
                    <div className="flex flex-col">
                      <label
                        className="label-form"
                        htmlFor="password"
                      >
                        Senha
                      </label>
                      <div className="flex items-center justify-between relative">
                        <input
                          id="password"
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          value={data.password}
                          onChange={(e) =>
                            setData(
                              "password",
                              e.target.value,
                            )
                          }
                          className="input-form w-full"
                        />
                        <div
                          className="absolute right-2 cursor-pointer text-gray-500"
                          onClick={() =>
                            setShowPassword(
                              (state) => !state,
                            )
                          }
                        >
                          {showPassword ? (
                            <IoEyeOff size={24} />
                          ) : (
                            <IoEye size={24} />
                          )}
                        </div>
                      </div>
                      {errors.password && (
                        <div className="text-sm text-red-500">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="label-form"
                        htmlFor="password_confirmation"
                      >
                        Repita a senha
                      </label>
                      <div className="flex items-center justify-between relative">
                        <input
                          id="password_confirmation"
                          type={
                            showPassword2
                              ? "text"
                              : "password"
                          }
                          value={
                            data.password_confirmation
                          }
                          onChange={(e) =>
                            setData(
                              "password_confirmation",
                              e.target.value,
                            )
                          }
                          className="input-form w-full"
                        />
                        <div
                          className="absolute right-2 cursor-pointer text-gray-500"
                          onClick={() =>
                            setShowPassword2(
                              (state) => !state,
                            )
                          }
                        >
                          {showPassword2 ? (
                            <IoEyeOff size={24} />
                          ) : (
                            <IoEye size={24} />
                          )}
                        </div>
                      </div>
                      {errors.password_confirmation && (
                        <div className="text-red-500">
                          {errors.password_confirmation}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 md:mt-6 mt-4">
                    <div className="flex flex-col">
                      <label
                        className="label-form"
                        htmlFor="roles"
                      >
                        Função
                      </label>
                      <select
                        id="roles"
                        defaultValue={user.roles}
                        value={data.roles}
                        onChange={(e) =>
                          setData("roles", e.target.value)
                        }
                        className="input-form"
                      >
                        <option value="">
                          Selecione a função
                        </option>
                        {roleUser.map((role: any) => (
                          <option
                            key={role?.value}
                            value={role?.value}
                          >
                            {role?.label}
                          </option>
                        ))}
                      </select>
                      {errors.roles && (
                        <div className="text-sm text-red-500">
                          {errors.roles}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="label-form"
                        htmlFor="status"
                      >
                        Status
                      </label>
                      <select
                        id="status"
                        value={data.status}
                        onChange={(e) =>
                          setData(
                            "status",
                            e.target.value,
                          )
                        }
                        className="input-form"
                      >
                        <option value="">
                          Selecione o status
                        </option>
                        {statusUser.map((stat: any) => (
                          <option
                            key={stat?.value}
                            value={stat?.value}
                          >
                            {stat?.label}
                          </option>
                        ))}
                      </select>
                      {errors.status && (
                        <div className="text-red-500">
                          {errors.status}
                        </div>
                      )}
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
      </main>
    </AuthenticatedLayout>
  )
}

export default editUser