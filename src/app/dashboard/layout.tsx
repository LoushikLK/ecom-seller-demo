"use client";

import {
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { MetricsCards, MetricsCards2 } from "@/components/dashboard";
import Sidebar from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/index";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const salesData = [
  { name: "Jan", total: 4000 },
  { name: "Feb", total: 3000 },
  { name: "Mar", total: 5000 },
  { name: "Apr", total: 4500 },
  { name: "May", total: 6000 },
  { name: "Jun", total: 5500 },
  { name: "Jul", total: 7000 },
  { name: "Aug", total: 6500 },
  { name: "Sep", total: 8000 },
  { name: "Oct", total: 7500 },
  { name: "Nov", total: 9000 },
  { name: "Dec", total: 8500 },
];

const recentOrders = [
  {
    id: "1234",
    customer: "John Doe",
    product: "Premium Headphones",
    status: "Shipped",
    total: "$299.99",
  },
  {
    id: "5678",
    customer: "Jane Smith",
    product: "Wireless Mouse",
    status: "Processing",
    total: "$49.99",
  },
  {
    id: "9012",
    customer: "Bob Johnson",
    product: "Gaming Keyboard",
    status: "Delivered",
    total: "$129.99",
  },
  {
    id: "3456",
    customer: "Alice Brown",
    product: "Smartwatch",
    status: "Shipped",
    total: "$199.99",
  },
  {
    id: "7890",
    customer: "Charlie Wilson",
    product: "Bluetooth Speaker",
    status: "Processing",
    total: "$79.99",
  },
];

const topProducts = [
  { name: "Premium Headphones", sales: 1234 },
  { name: "Wireless Mouse", sales: 987 },
  { name: "Gaming Keyboard", sales: 765 },
  { name: "Smartwatch", sales: 543 },
  { name: "Bluetooth Speaker", sales: 321 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

function SalesOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={salesData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          contentStyle={{ background: "#333", border: "none" }}
          labelStyle={{ color: "#fff" }}
          itemStyle={{ color: "#fff" }}
        />
        <Line
          type="monotone"
          dataKey="total"
          stroke="#adfa1d"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

function TopProductsChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={topProducts}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="sales"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {topProducts.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{ background: "#333", border: "none" }}
          itemStyle={{ color: "#fff" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          {/* Metrics Cards */}
          <MetricsCards />
          <MetricsCards2 />

          {/* Sales Overview */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <SalesOverview />
            </CardContent>
          </Card>

          {/* Recent Orders and Top Products */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  You have {recentOrders.length} orders this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Order</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Product</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentOrders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">
                          {order.id}
                        </TableCell>
                        <TableCell>{order.customer}</TableCell>
                        <TableCell>{order.product}</TableCell>
                        <TableCell>{order.status}</TableCell>
                        <TableCell className="text-right">
                          {order.total}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Top Products</CardTitle>
                <CardDescription>
                  Your best selling products this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TopProductsChart />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
