import React from 'react';

const Text = (props) => {

	const { tag, className } = props;


	return (
		<>
			{
				tag === 'h1' && (
					<h1 className={className}>
						{props.children}
					</h1>
				)
			}
			{
				tag === 'h2' && (
					<h2 className={className}>
						{props.children}
					</h2>
				)
			}
			{
				!tag && (
					<p className={className}>
						{props.children}
					</p>
				)
			}
		</>
	);
};

export default React.memo(Text);