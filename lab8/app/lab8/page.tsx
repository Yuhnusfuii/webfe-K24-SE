import ContactForm from "@/components/forms/contactForm";
import ValidationForm from "@/components/forms/validationForm";
import DynamicEducationForm from "@/components/forms/educationForm";
import ApiRegisterForm from "@/components/forms/apiRegisterForm";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Lab08Page() {
  return (
    <div className="p-8">
      <Tabs defaultValue="contact" className="w-full">
        {/* Tab header */}
        <TabsList className="mb-6">
          <TabsTrigger value="contact">Simple Contact</TabsTrigger>
          <TabsTrigger value="validation">Form Validation</TabsTrigger>
          <TabsTrigger value="dynamic">Dynamic Fields</TabsTrigger>
          <TabsTrigger value="api">API Submission</TabsTrigger>
          
        </TabsList>

        {/* Task 1 */}
        <TabsContent value="contact">
          <h1 className="text-2xl font-bold mb-2">
            Exercise 1: Building a Simple Contact Form
          </h1>
          <p className="text-muted-foreground mb-6">
            Form liên hệ đơn giản với các trường: tên, email và tin nhắn
          </p>
          <ContactForm />
        </TabsContent>

        {/* Task 2 */}
        <TabsContent value="validation">
          <h1 className="text-2xl font-bold mb-2">
            Exercise 2: Form Validation
          </h1>
          <p className="text-muted-foreground mb-6">
            Form đăng ký với validation chi tiết cho từng trường thông tin
          </p>
          <ValidationForm />
        </TabsContent>

        {/* Task 3 */}
        <TabsContent value="dynamic">
          <h1 className="text-2xl font-bold mb-2">
            Exercise 3: Dynamic Form Fields
          </h1>
          <p className="text-muted-foreground mb-6">
            Form cho phép thêm và xoá nhiều mục học vấn
          </p>
          <DynamicEducationForm />
        </TabsContent>

        {/* Task 4 */}
        <TabsContent value="api">
          <h1 className="text-2xl font-bold mb-2">
            Exercise 4: API Form Submission
          </h1>
          <p className="text-muted-foreground mb-6">
            Form đăng ký tài khoản với xử lý gửi dữ liệu lên API và hiển thị
            thông báo lỗi
          </p>
          <ApiRegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
