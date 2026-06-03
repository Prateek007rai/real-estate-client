

const PageNotFound = () =>(
   <div className='text-center p-5'>
    <h2>Page Not Found 404</h2>
   </div>
)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <SearchProvider>
            <Main />
            <Toaster />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/auth/account-activate/:token' element={<AccountActivate />} />
              <Route path='/auth/forgot-password' element={<ForgotPassword />} />
              <Route path='/auth/access-account/:token' element={<AccessAccount />} />

              <Route path="/" element={<PrivateRoute />}>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='user/wishlist' element={<Wishlist />} />
                <Route path='user/enquiries' element={<Enquiries />} />
                <Route path='ad/create' element={<AdCreate />} />
                <Route path='ad/create/sell/House' element={<SellHouse />} />
                <Route path='ad/create/sell/Land' element={<SellLand />} />
                <Route path='ad/create/rent/House' element={<RentHouse />} />
                <Route path='ad/create/rent/Land' element={<RentLand />} />
                <Route path='user/profile' element={<Profile />} />
                <Route path='user/settings' element={<Settings />} />
                <Route path='user/ad/:slug' element={<AdEdit />} />
              </Route>
              
              <Route path='/ad/:slug' element={<AdView />} />
              <Route path='/agents' element={<Agents />} />
              <Route path='/agent/:username' element={<Agent />} />

              <Route path='/buy' element={<Buy />} />
              <Route path='/rent' element={<Rent />} />

              <Route path='/search' element={<Search />} />     

              <Route path='*' element={<PageNotFound />} />           

            </Routes>
            <Footer />
          </SearchProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
