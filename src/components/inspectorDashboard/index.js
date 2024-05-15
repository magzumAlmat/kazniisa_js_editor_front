import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllBanners,
  getAllCompanies,
  getBannerByCompanyIdAction,
  getUserInfo,
  getAllRevises
} from "@/store/slices/authSlice";
import jwtDecode from "jwt-decode";
import Link from "next/link";
import { addCompanyAction } from "@/store/slices/authSlice";
import ReviseDashboard from "../reviseDashboard";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation";



export default function InspectorDashboard() {
   
}