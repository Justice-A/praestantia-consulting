import { Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24 h-screen">
     <Container>
      <div className="mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose us?
          </p>
          <p className="text-2xl text-gray-600 mx-auto">
            Professional expertise backed by real credentials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl  text-gray-900 mb-2">25 Years Experience</p>
            <p className="text-gray-600 text-sm">
              Fellow Chartered Accountant (FCA) with proven track record
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl  text-gray-900 mb-2">ICAN & CITN Certified</p>
            <p className="text-gray-600 text-m">
              Fully licensed and regulated by professional bodies
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl  text-gray-900 mb-2">Startup & SME Specialists</p>
            <p className="text-gray-600 text-sm">
              Designed systems for 100+ businesses across Nigeria
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-2xl  text-gray-900 mb-2">Serving Lagos & Beyond</p>
            <p className="text-gray-600 text-sm">
              Remote support available across Nigeria and worldwide
            </p>
          </div>
        </div>
      </div>
      </Container>
    </section>
  );
}