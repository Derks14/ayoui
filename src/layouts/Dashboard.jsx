import { Outlet } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div>

      <section className="min-h-screen flex flex-auto">

        <aside className="w-64 min-w-[16rem] bg-red-500">
          <p>Sidebar</p>
        </aside>
        <section className="flex flex-col flex-auto">
          <header>
            <p>header</p>
          </header>
          <div>
            <Outlet />
          </div>
          <footer>
            <p>footer</p>
          </footer>
        </section>
      </section>

    </div>
  )
}
