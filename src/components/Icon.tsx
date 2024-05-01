import { icons } from "@/app/categorias/utils/icons"

interface IconProps {
    name: string
}

export function Icon( { name }: IconProps){

    return icons.find(icon => icon.name == name)?.icon
    
}