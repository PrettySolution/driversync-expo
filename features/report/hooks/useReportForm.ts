import { useQuery } from "@tanstack/react-query"
import { fetchReportForm } from "../services/reportFormService"

export const useReportForm = () => {
  return useQuery({ queryKey: ['sections'], queryFn: fetchReportForm})
}