export const handleAddPeso = (setPesos,pesos) => {
    setPesos([...pesos, {peso: ''}])
}

export const handleRemovePeso = (setPesos,pesos, index) => {
    const newPeso = pesos.filter((_,i) => i !== index)
    setPesos(newPeso)
}

export const handlePesoChange = (index, value,setPesos,pesos,peso) => {
    const newPesos = [...pesos]
    newPesos[index].peso = value
    setPesos(newPesos)
}

export const calcularTotalPeso = (pesos) => {
    if (!Array.isArray(pesos) || pesos.length === 0) return 0
    return pesos.reduce((total, item) => total + Number(item.peso || 0), 0);
}