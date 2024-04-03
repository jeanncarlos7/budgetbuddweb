export default function NavBar(){
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
        <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
          <h1 className="text-4x1 font-bold">Jean Carlos</h1>
          <ul className="flex gap-6">
            <li><link href="/">Dashboard</link></li>
            <li><link href="/Movimentações">Movimentações</link></li>
            <li><link href="/Categorias">Categorias</link></li>
          </ul>
          <div className="w-14 rounded-full overflow-hidden">
            <img src="https://i.pravatar.cc/300" alt="avatar" />
          </div>
        </nav>
        <h2>Dashboard</h2>
      </main>  
    )
}