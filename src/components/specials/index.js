import React, { useState, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close'

export default function Specials() {
	const items = [
		{
			name: "Special Item 1",
			comment: "Comment",
			price: "10 00.00"
		},
		{
			name: "Special Item 2",
			comment: "Comment",
			price: "10 00.00"
		},
		{
			name: "Special Item 3",
			comment: "Comment",
			price: "10 00.00"
		},
		{
			name: "Special Item 4",
			comment: "Comment",
			price: "10 00.00"
		},
		{
			name: "Special Item 5",
			comment: "Comment",
			price: "10 00.00"
		},
		{
			name: "Special Item 6",
			comment: "Comment",
			price: "10 00.00"
		},
		{
			name: "Special Item 7",
			comment: "Comment",
			price: "10 00.00"
		},
	];
	return(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					backgroundColor: "rgb(50, 50, 50)",
					width: "100%",
					height: "15%",
				}}
			>
				<span
					style={{
						display: "flex",
						marginLeft: 5,
						color: "white",
						fontWeight: 600,
					}}
				>
					Specials
				</span>

				<CloseIcon
					style={{
						display: "flex",
						color: "white",
						fontSize: 28,
						marginLeft: "auto",
    					marginRight: 5,

					}}
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "space-between",
					width: "100%",
				}}
			>
				{items.map((item, index) => (
					<Item key={index} item={item} />
				))}
			</div>
		</div>
	);
}

function Item({item}){
	return(
		<div
			style={{
				width: "95%",
				marginTop: 7,
				display: "flex",
				flexDirection: "row",
				boxShadow: "1px 2px 1px 1px #ddd",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#d21212",
					borderTopLeftRadius: 20,
					borderBottomLeftRadius: 20,
					width: "33%",
				}}
			>
				<p
					style={{
						paddingLeft: 5,
						paddingRight: 5,
						color: "white",
						fontSize: 14,
					}}
				>#{item.name}</p>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: "33%",
					borderRight: '2px solid #aaa'
				}}
			>
				<p>#{item.comment}</p>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					borderTopRightRadius: 20,
					borderBottomRightRadius: 20,
					width: "33%",
				}}
			>
				<p>ZAR {item.price}</p>
			</div>
		</div>
	)
}