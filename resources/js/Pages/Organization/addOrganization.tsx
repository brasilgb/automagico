import { BackButton, SaveButton } from '@/Components/Buttons'
import { Card, CardBody, CardContainer, CardFooter, CardHeader, CardHeaderContent } from '@/Components/Card'
import { BreadCrumbTop, HeaderContent, TitleTop } from '@/Components/PageTop'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { statusClient } from '@/Utils/dataSelect'
import { Head, useForm } from '@inertiajs/react'
import { SlOrganization } from 'react-icons/sl'

const AddOrganization = () => {

  const { data, setData, post, progress, processing, errors } = useForm({
    name: "",
    status: "waiting"
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    post(route("organizations.store"));
  }

  return (
    <AuthenticatedLayout>
      <Head title="Dashboard" />
      <main className=''>
        <Card>
          <HeaderContent>
            <TitleTop>
              <SlOrganization size={30} />
              <span className="ml-2">Organizações</span>
            </TitleTop>
            <BreadCrumbTop
              links={[
                { url: "/organizations", label: "Organizações" },
                { url: null, label: "Adicionar organização" },
              ]}
            />
          </HeaderContent>
          <CardContainer>
            <CardHeader>
              <CardHeaderContent>
                <BackButton url={"/organizations"} label={"Voltar"} />
              </CardHeaderContent>
              <CardHeaderContent>
                <></>
              </CardHeaderContent>
            </CardHeader>
            <form onSubmit={handleSubmit} autoComplete="off">
              <CardBody className=" border-y border-gray-100">
                <div className="px-3 my-4">
                  <div className="grid md:grid-cols-3 gap-4 mt-4">
                    <div className="flex flex-col col-span-2">
                      <label
                        className="label-form"
                        htmlFor="name"
                      >
                        Nome da organização
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={data.name}
                        onChange={(e) => {
                          setData(
                            "name",
                            e.target.value,
                          )
                        }}
                        className="input-form"
                      />
                      {errors.name && (
                        <div className="text-sm text-red-500">
                          {errors.name}
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="label-form"
                        htmlFor="status"
                      >
                        Status da organização
                      </label>
                      <select
                        id="status"
                        value={data.status}
                        onChange={(e) => {
                          setData(
                            "status",
                            e.target.value,
                          )
                        }}
                        className="input-form"
                      >
                        {statusClient.map((status:any) => (
                          <option value={status.value}>{status.label}</option>
                        ))}
                      </select>
                      {errors.status && (
                        <div className="text-sm text-red-500">
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

export default AddOrganization