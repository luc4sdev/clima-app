import { Button } from "@/components/Button";
import { Climate } from "@/components/Climate";
import { Header } from "@/components/Header";

export default function Home() {

  const menus = [
    {
      title: 'Busca CEP',
      url: '/busca'
    },
    {
      title: 'Contato',
      url: '/contato'
    },
  ]
  
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />

      <div className="bg-[url('../assets/img/bg-climate.jpg')]  bg-cover bg-repeat-y flex flex-col grow justify-center items-center gap-y-20">
        <Climate />
        <div className="flex justify-center items-center gap-2">
          {menus.map(menu => {
            return (
              <Button title={menu.title} url={menu.url} />
            )
          })}
        </div>
      </div>
    </div>
  )
}
