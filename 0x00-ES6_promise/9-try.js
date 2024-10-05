export default function guardrail(mathFunction){
    const queue = []

    try{
        const results = mathFunction()
        queue.push(results)
    } catch(error){
        queue.push(error.message)
    } finally{
        queue.push("guard was processed")
    }

    return queue;
}