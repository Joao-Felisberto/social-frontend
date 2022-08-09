import type { Component } from "solid-js";

interface PropType {
	imageUrl: string;
}

const SidebarItem: Component<PropType> = (props/* : PropType */) => {
	return (
		<li>
			<a href="#" class="flex items-center  text-gray-700 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline">
				<span>
					<img src={props.imageUrl} alt="server icon" class="rounded-md" />
				</span>
				{/* <span class="hidden lg:flex ">{props.text}</span> */}
			</a>
		</li>
	)
};

export default SidebarItem;