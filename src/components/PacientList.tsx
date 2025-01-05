import { usePatientStore } from "../store"
import { PatientsDetails } from "./PatientsDetails"


export const PacientList = () => {

  const {patients} = usePatientStore()

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll-y-scroll">
        {patients.length ? (
          <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Admintistra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {patients.map(patient => (
            <PatientsDetails 
            key={patient.id}
            patient={patient}
            />
          ))}
          </>
        ) : (
          <>
              <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
                Comienza Agregando Pacientes {''}
                <span className="text-indigo-600 font-bold">y Apareceran en este Lugar</span>
              </p>
          </>
        )}
        
    </div>

  )
}
