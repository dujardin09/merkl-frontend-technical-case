import { Button, Image } from "dappkit/src";

interface tokenProps {
	name: string,
	icon: string
	onClick?: () => void;
	isSelected?: boolean;
}

export default function Token({name, icon, onClick, isSelected}: tokenProps) {
	return (
		<Button
			className={`mx-md p-lg overflow-hidden cursor-pointer p-2 ${isSelected ? 'border-dashed' : 'hover:border-dashed'}`}
			onClick={onClick}
		>
			<p>{name}</p>
			<Image
				src={icon}
				className="w-10 h-10"
				imgClassName="rounded-full"
			/>
		</Button>
	);
}
