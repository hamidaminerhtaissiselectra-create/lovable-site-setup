-- Fix user_roles policies: drop RESTRICTIVE, recreate as PERMISSIVE
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can update roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can delete roles" ON public.user_roles;

CREATE POLICY "Admins can view all roles" ON public.user_roles FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Users can view own role" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id);
CREATE POLICY "Admins can insert roles" ON public.user_roles FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update roles" ON public.user_roles FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete roles" ON public.user_roles FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Fix customer_requests policies: drop RESTRICTIVE, recreate as PERMISSIVE
DROP POLICY IF EXISTS "Admins can view all requests" ON public.customer_requests;
DROP POLICY IF EXISTS "Only admins can view customer requests" ON public.customer_requests;
DROP POLICY IF EXISTS "Admins can update requests" ON public.customer_requests;
DROP POLICY IF EXISTS "Admins can delete requests" ON public.customer_requests;
DROP POLICY IF EXISTS "Anyone can submit requests" ON public.customer_requests;

CREATE POLICY "Admins can view all requests" ON public.customer_requests FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can update requests" ON public.customer_requests FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role)) WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can delete requests" ON public.customer_requests FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Anyone can submit requests" ON public.customer_requests FOR INSERT TO anon, authenticated WITH CHECK (true);