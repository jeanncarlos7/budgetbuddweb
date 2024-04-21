"use client"

import DropdownAction from "@/components/DropdownAction";
import { Icon } from "@/components/Icon";
import { destroy } from "../actions/categorias/destroy";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CategoriaItemProps {
    categoria: {
        id: number,
        nome: string,
        icone: string
    }
}

export function CategoriaItem({ categoria }: CategoriaItemProps) {
    const router = useRouter()

    function handleDelete() {
        toast.promise(
            destroy(categoria.id),
            {
                loading: 'apagando...',
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }

    return (
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropdownAction
                onEdit={() => { router.push("/categorias/" + categoria.id) }}
                onDelete={handleDelete}
            />
        </div>
    )
}