import moment from "moment";

export  const parseDate = (date) =>{
    return (
        moment(date, "yyyy-MM-DD").format("DD MMM yyyy")
    )
}
