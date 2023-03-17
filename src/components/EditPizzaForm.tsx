import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import './styles.css'
import Pizza from '../models/Pizza'

interface EditPizzaFormProps {
  data: Pizza
  updatePizza: (newPizza: Pizza) => void
  handleToggleEdit: () => void
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({data, updatePizza, handleToggleEdit}) => {

  const [editPizza, setEditPizza] =
    useState<Pizza>(data)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target

    setEditPizza({
      ...editPizza,
      [name]: value
    })
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    const {title, price, img} = editPizza

    if (title && price && img) {
      updatePizza(editPizza)
      handleToggleEdit()
    }
  }

  console.log('edit pizza >>>', editPizza)

  return (
    <form
      className="edit-form"
      onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={editPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={editPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={editPizza.img}
      />
      <button type="submit">
        Подтвердить
      </button>
    </form>
  )
}

export default EditPizzaForm