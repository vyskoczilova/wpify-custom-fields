import React, { useCallback, useContext, useEffect, useState } from 'react';
import PT from 'prop-types';
import AppContext from '../components/AppContext';
import { useDelay, useFetch } from '../helpers';
import SelectControl from '../components/SelectControl';
import MoveButton from '../components/MoveButton';
import CloseButton from '../components/CloseButton';
import { ReactSortable } from 'react-sortablejs';
import SortableControl from '../components/SortableControl';

const PostField = (props) => {
	const {
		id,
		value = null,
		onChange,
		description,
		group_level = 0,
		required,
		isMulti = false,
		className,
		post_type = 'post',
		query_args = [],
	} = props;

	const { api } = useContext(AppContext);
	const [currentValue, setCurrentValue] = useState(Array.isArray(value) ? value : [value]);
	const [search, setSearch] = useState('');

	const handleChange = (value) => {
		setCurrentValue(value);
	};

	useEffect(() => {
		if (onChange && JSON.stringify(value) !== JSON.stringify(currentValue)) {
			onChange(isMulti ? currentValue : currentValue.find(Boolean));
		}
	}, [value, currentValue]);

	const { fetch, result } = useFetch({ defaultValue: [] });

	useDelay(() => {
		fetch({
			method: 'post',
			url: api.url + '/posts',
			nonce: api.nonce,
			body: { ...props, search },
		});
	}, [search, props, api]);

	const getSelectedOptions = useCallback(() => {
		return currentValue.map(value => {
			return result.find(option => {
				return String(option.value) === String(value);
			});
		}).filter(Boolean)
	}, [currentValue, result]);

	const handleDelete = (id) => () => {
		setCurrentValue(currentValue.filter(value => String(value) !== String(id)));
	};

	const handleMove = (items) => {
		if (!items.some(item => typeof item === 'object')) {
			setCurrentValue(items);
		}
	};

	const handleAdd = (item) => {
		if (isMulti) {
			const newValues = [...currentValue, item.value];
			setCurrentValue([...new Set(newValues.map(value => String(value)))]);
		} else {
			setCurrentValue([item.value]);
		}
	};

	const selectedOptions = getSelectedOptions();

	return (
		<React.Fragment>
			{group_level === 0 && (
				<input type="hidden" name={id} value={isMulti ? JSON.stringify(currentValue) : currentValue}/>
			)}
			<SelectControl
				onInputChange={setSearch}
				options={result.filter(option => !currentValue.includes(String(option.value)))}
				onChange={handleAdd}
				value={null}
			/>
			{description && (
				<p className="description" dangerouslySetInnerHTML={{ __html: description }}/>
			)}
			<div className="wcf-post-selected">
				<SortableControl
					list={currentValue}
					setList={handleMove}
				>
					{selectedOptions.map(option => (
						<div className="wcf-post-selected__item" key={option.value}>
							<div className="wcf-post-selected__item-header">
								{currentValue.length > 1 && (
									<MoveButton/>
								)}
								<strong dangerouslySetInnerHTML={{ __html: option.label }}/>
								<CloseButton onClick={handleDelete(option.value)}/>
							</div>
							<p dangerouslySetInnerHTML={{ __html: option.excerpt }}/>
						</div>
					))}
				</SortableControl>
			</div>
		</React.Fragment>
	);
};

PostField.propTypes = {
	className: PT.string,
	id: PT.string,
	value: PT.oneOfType([PT.string, PT.number]),
	onChange: PT.func,
	options: PT.array,
	description: PT.oneOfType([PT.string, PT.element]),
	list_type: PT.string,
	group_level: PT.number,
	required: PT.bool,
	isMulti: PT.bool,
};

export default PostField;